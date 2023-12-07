using ToDoMoDo.Model;

namespace ToDoMoDo.Interfaces
{
    public interface ITaskRepo
    {
        public Task AddTaskAsync(TaskToDo task);
        public Task<List<TaskToDo>> GetAllTasksAsync( );
        public Task<TaskToDo> GetTaskById(int id);
        public Task UpdateTaskAsync(TaskToDo task);
        public Task DeleteTaskAsync(int id);
    }
}
