import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent implements OnInit{
  constructor(){}
  ngOnInit(): void {
      
  }
  course = [
    { 
      'id':1,
      'name': 'Learn Angular',
      'description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      'image':'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png'
    },
    { 
      'id':2,
      'name': 'Learn Typescript',
      'description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
      'image':'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png'
    },
    { 
      'id':3,
      'name': 'Learn Java',
      'description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
      'image':'https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png'
    },
    { 
      'id':4,
      'name': 'Learn JavaScript',
      'description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
      'image':'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png'
    },
  ]
}
