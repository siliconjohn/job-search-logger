import { Table } from 'antd'; 
import type { EntryListTableType } from '../../types';
import type { TableProps } from 'antd';
import { useEntriesStore } from '../../stores/entriesStore';

const dateFormatter = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
});

const hrefStyle: React.CSSProperties = { 
    maxWidth: 180,
    display: 'inline-block',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap' 
}
              
const columns: TableProps<EntryListTableType>['columns'] = [
    {
        title: 'Created',
        dataIndex: 'createdAt',
        key: 'createdAt',
        render: (createdAt) => 
            dateFormatter.format( new Date( createdAt )),
        sorter: (a, b) => { 
            const timeA = new Date(a.createdAt).getTime();
            const timeB = new Date(b.createdAt).getTime();
            return (isNaN(timeA) ? 0 : timeA) - (isNaN(timeB) ? 0 : timeB);
        },
        defaultSortOrder: 'descend',    
        sortDirections: ['ascend', 'descend'],
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',  
    },
    {
        title: 'URL',
        dataIndex: 'url',
        key: 'url',
        render: (url) => 
            <a style={ hrefStyle } 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer"
            >
                {url}
            </a> 
    }
];

const ActivityList: React.FC = () => {
    const entries = useEntriesStore( ( state ) => state.entries );

    return (
        <Table<EntryListTableType> 
            columns={columns} 
            dataSource={entries} 
            rowKey="key" 
        /> 
    )
}  

export default ActivityList;
