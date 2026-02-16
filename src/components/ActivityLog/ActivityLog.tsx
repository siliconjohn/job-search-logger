import ActivityList from '../ActivityList/ActivityList';
import AddEntry from '../AddEntry/AddEntry';

const ActivityLog: React.FC = () => {   
    return (
        <>
            <AddEntry/>
			<ActivityList/>
        </>
    )
}  

export default ActivityLog;
