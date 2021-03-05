var tasks = [
    {
      'name'     : 'Write for Envato Tuts+',
      'duration' : 120
    },
    {
      'name'     : 'Work out',
      'duration' : 60
    },
    {
      'name'     : 'Procrastinate on Duolingo',
      'duration' : 240
    }
  ];

  let task_names = tasks.map((task, index, array) => {
    return task.name;
  });

  let task_120 = tasks.filter((task) => {
      return task.duration >=120;
  })

  console.log(task_120);