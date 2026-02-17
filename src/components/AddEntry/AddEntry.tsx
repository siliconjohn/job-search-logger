import { Button, Form } from 'antd'; 
import type { EntrieType } from '../../types'; 
import { useEntriesStore } from '../../stores/entriesStore';
import InputCopyPaste from '../InputCopyPaste/InputCopyPaste';
import EntryKindExample from '../KindChooser/KindChooser';

const AddEntry: React.FC = () => {
    const [ form ] = Form.useForm();
    const { addEntry } = useEntriesStore();
 
    const onFinish = ( values: EntrieType ) => {    
        addEntry( { 
                ...values, 
                createdAt: new Date().toISOString(), 
                key: crypto.randomUUID()
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
                initialValues={{ name: '', url: '', kind: 'App' }}
            >   
                <InputCopyPaste 
                    form={ form }
                    label="Company"
                    valueName={ "company" }
                />
                
                <InputCopyPaste 
                    form={ form }
                    label="Position"
                    valueName={ "position" }
                />

                <InputCopyPaste 
                    form={ form }
                    label="URL"
                    valueName={ "url" }
                />
                
                <InputCopyPaste 
                    form={ form }
                    label="Name"
                    valueName={ "name" }
                />

                <InputCopyPaste 
                    form={ form }
                    label="Note"
                    valueName={ "note" }
                />
                
                <EntryKindExample  
                    valueName={ "kind" }
                />
                
                <Form.Item label={null}>
                    <Button 
                        type="primary" 
                        htmlType="submit"
                    >
                        Save
                    </Button>
                 </Form.Item>
            </Form> 
        </>
    )
}  

export default AddEntry;
