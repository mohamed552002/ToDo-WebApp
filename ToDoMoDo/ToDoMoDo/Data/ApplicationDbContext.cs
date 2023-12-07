using Microsoft.EntityFrameworkCore;
using ToDoMoDo.Model;

namespace ToDoMoDo.Data
{
    public class ApplicationDbContext:DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) {}
        public DbSet<TaskToDo> Tasks { get; set; }
    }
}
