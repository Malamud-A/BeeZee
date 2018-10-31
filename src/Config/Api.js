import axios from 'axios'

const devName = 'Alex';
const apiURL = "https://uxcandy.com/~shapoval/test-task-backend"

export default {
  get_tasks: (page = 1, sort_field = 'id', sort_direction = 'asc') =>
      axios.get(`${apiURL}/?developer=${devName}`, {
        params: {page, sort_field, sort_direction}
      }),

  add_task: (username, email, text, image) =>
      axios.post(`${apiURL}/create/?${devName}`, {
        username,
        email,
        text,
        image
      })
};
