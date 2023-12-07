using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using ToDoMoDo.Data;
using ToDoMoDo.Dtos;
using ToDoMoDo.Interfaces;
using ToDoMoDo.Model;

namespace ToDoMoDo.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TasksController : ControllerBase
    {
        private readonly ITaskRepo _taskRepo;
        private readonly IMapper _mapper;
        public TasksController(ITaskRepo taskRepo, IMapper mapper)
        {
            _taskRepo = taskRepo;
            _mapper = mapper;
        }
        [HttpPost("AddTask")]
        public async Task<IActionResult> AddTask(TaskDto taskdto)
        {
            var task = _mapper.Map<TaskToDo>(taskdto);
            await _taskRepo.AddTaskAsync(task);
            return Ok();
        }
        [HttpGet("GetAllTasks")]
        public async Task<IActionResult> GetAllTasks()
        {
            var task = await _taskRepo.GetAllTasksAsync();
            var taskDto = _mapper.Map<List<TaskDto>>(task);
            return Ok(taskDto);
        }
        [HttpDelete("DeleteTask/{id}")]
        public async Task<IActionResult> DeleteTask(int id)
        {
            await _taskRepo.DeleteTaskAsync(id);
            return Ok("Deleted Successfully");
        }
        [HttpPut("UpdateTask/{id}")]
        public async Task<IActionResult> UpdateTask([FromBody]TaskDto taskDto)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);
            var task = _mapper.Map<TaskToDo>(taskDto);
            await _taskRepo.UpdateTaskAsync(task);
            return Ok();
        }
    }
}
