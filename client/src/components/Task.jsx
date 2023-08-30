import {useContext} from 'react';
import WorkspaceSlideOver from '../features/WorkspaceSlideOver';
import {ModalContext} from '../contexts/ModalContext/ModalContext';

const Task = ({
    task,
    taskName,
    taskDetail,
    taskComments,
    tags,
    assignedUserIds,
    columnName,
    createdAt,
    boardId, 
    columnId,
    priority,
}) => {
    const {
        handleSlideOver,
    } = useContext(ModalContext);

    return (
        <div>
            <WorkspaceSlideOver
                key={task._id}
                taskId={task._id}
                columnId={columnId}
                boardId={boardId}
                taskName={taskName}
                taskDetail={taskDetail}
                taskComments={taskComments}
                tags={tags}
                assignedUserIds={assignedUserIds}
                columnName={columnName}
                createdAt={createdAt}
                task={task}
                priority={priority}
            />
            <div
                className=' p-2.5 h-[100px] min-h-[100px] items-center flex text-left rounded-xl  cursor-grab relative task'
                // onClick={() => handleSlideOver()}
            >
                <h3 className='task-name'>{taskName}</h3>
            </div>
        </div>
    );
};

// const {taskTitle, taskPriority, taskDetail, taskComment, deleteTask, updateTask} = task;

export default Task;
