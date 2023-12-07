
using Microsoft.EntityFrameworkCore;
using ToDoMoDo.Data;
using ToDoMoDo.Interfaces;
using ToDoMoDo.Model;

namespace ToDoMoDo.Implementation
{
    public class TaskRepo : ITaskRepo
    {
        private readonly ApplicationDbContext _context;
        public TaskRepo(ApplicationDbContext context)
        {
            _context = context;
        }
        public async Task AddTaskAsync(TaskToDo task)
        {

            await _context.Tasks.AddAsync(task);
            _context.SaveChanges();
        }

        public async Task DeleteTaskAsync(int id)
        {
            var task = await _context.Tasks.FirstOrDefaultAsync(t => t.Id == id);
           _context.Tasks.Remove(task);
            _context.SaveChanges();
        }

        public async Task<List<TaskToDo>> GetAllTasksAsync()
        {
            return (await _context.Tasks.ToListAsync());
        }

        public Task<TaskToDo> GetTaskById(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<TaskToDo> GetTaskByIdAsync(int id)
        {
            return await _context.Tasks.FirstOrDefaultAsync(task => task.Id == id);
        }
        public async Task UpdateTaskAsync(TaskToDo task)
        {
            //var oldTask = await GetTaskByIdAsync(id);
            //if (oldTask != null)
            //    return null;
            _context.Update(task);
            await _context.SaveChangesAsync();
        }

    }
}
