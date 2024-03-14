import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseComponent } from '../course/course.component';
@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrl: './menupage.component.css'
})
export class MenupageComponent implements OnInit{
constructor(private param:ActivatedRoute , private orderservice:CourseComponent){}
getCourseId:any;
CourseData:any;
ngOnInit(): void {
    
}
}
