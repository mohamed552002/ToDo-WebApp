using AutoMapper;
using ToDoMoDo.Dtos;
using ToDoMoDo.Model;

namespace ToDoMoDo.Helpers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<TaskToDo, TaskDto>();
            CreateMap<TaskToDo,TaskDto>().ReverseMap();
        }
    }
}
