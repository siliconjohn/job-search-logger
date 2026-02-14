import { List  } from 'antd'; 
import type { ActivityListType } from '../../types';

const ActivityList: React.FC<ActivityListType> = ({ entries }) => {

  return (
    <>
        {entries.length > 0 && (
            <List
                dataSource={entries}
                itemLayout="horizontal"
                renderItem={(item) => (
                    <List.Item>
                        <List.Item.Meta
                            title={item.name}
                            description={
                                <>
                                    <a href={item.url}>{item.url}</a>
                                    <p>{item.createdAt.toLocaleString()}</p>
                                </>
                            }
                        />
                    </List.Item>
                )}
            />
        )}
    </>
  )
}  

export default ActivityList;
