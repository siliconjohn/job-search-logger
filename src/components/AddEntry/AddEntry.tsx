import { Input, Button, Form } from 'antd'; 
import type { EntrieType } from '../../types'; 
import { useEntriesStore } from '../../stores/entriesStore';

const AddEntry: React.FC = () => {
    const [ form ] = Form.useForm();
    const { addEntry } = useEntriesStore();
 
    const onFinish = ( values: EntrieType ) => {    
        addEntry( { 
                ...values, 
                createdAt: new Date(), 
                key: Math.random().toString().slice(2, 12)
            } 
        );
        
        form.resetFields();
    };
    
    return (
        <>
            <Form
                form={ form }
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
        </>
    )
}  

export default AddEntry;
