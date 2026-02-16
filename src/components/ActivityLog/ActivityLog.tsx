import type { LogType } from '../../types'; 
import ActivityList from '../ActivityList/ActivityList';
import AddEntry from '../AddEntry/AddEntry';

const ActivityLog: React.FC<LogType> = () => {   
    return (
        <>
            <AddEntry/>
			<ActivityList/>
        </>
    )
}  

export default ActivityLog;
