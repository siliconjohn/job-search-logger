import { useState, useEffect } from 'react';
import { Input, List, Button, Form } from 'antd';
import type { LogType } from './types';
import type { EntrieType } from './types';

const ActivityLog: React.FC<LogType> = ( { name } ) => {
    const [ formController ] = Form.useForm();
    const [ entries, setEntries ] = useState<EntrieType[]>( () => {
    const saved = localStorage.getItem('entries');
        
        if (saved) {
            try {
                return( JSON.parse(saved) );
            } catch (e) {
                console.error('Failed to parse entries from localStorage', e);
               
            }
        }
        return [];
    } );  
 
    const onFinish = ( values: EntrieType ) => {
        setEntries( [ ...entries, { ...values, createdAt: new Date() } ] ); 
        formController.resetFields();
    };
    
    useEffect(() => {
        localStorage.setItem('entries', JSON.stringify(entries));
    }, [entries]);
    
    useEffect(() => {
        
    }, []);
    
    return (
        <>
            <Form
                form={ formController }
                onFinish={ onFinish }
                labelCol={{ span: 2 }}
                wrapperCol={{ span: 12 }}
                initialValues={{ remember: true }}
            >
                <Form.Item
                    label="Name"
                     name="name"
                >
                    <Input></Input>
                </Form.Item>

                <Form.Item 
                    label="Url"
                     name="url"
                >
                    <Input></Input>
                </Form.Item>
            
                <Form.Item  >
                    <Button 
                        type="primary" 
                        htmlType="submit"
                    >
                        Submit
                    </Button>
                </Form.Item>
            </Form>

            { entries.length > 0 &&
                <List
                    dataSource={ entries }
                    itemLayout="horizontal"
                    renderItem={ (item) => (
                        <List.Item>
                            <List.Item.Meta
                                title={ item.name }
                                description={
                                    <>
                                        <a href={ item.url}>{ item.url }</a>
                                        <p>{ item.createdAt.toLocaleString() }</p>
                                    </>
                                }
                            />
                        </List.Item>
                    )}
                />
            }
        </>
    )
}  

export default ActivityLog;
