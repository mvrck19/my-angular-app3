import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatIconModule, CommonModule, MatChipsModule, MatCardModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  educationList = [
    {
      year: '2022',
      title: 'Άσκηση στην Ορθοπαιδική Αποκατάσταση',
      institution: 'Manual Courses'
    },
    {
      year: '2024',
      title: 'Ολοκληρωμένη Διαχείριση Οιδήματος με τη Μέθοδο Vodder',
      institution: 'Epimorfosis'
    },
    {
      year: '2024',
      title: 'Φυσικοθεραπευτική Αντιμετώπιση Αναπνευστικών Προβλημάτων',
      institution: 'Πανελλήνιος Σύλλογος Φυσικοθεραπευτών'
    },
    {
      year: '2024',
      title: 'Θεραπεύτρια Μασάζ',
      institution: 'Release and Relax Motion'
    },
    {
      year: '2024',
      title: 'The Painful Shoulder',
      institution: 'Adam Meakins'
    },
    {
      year: '2024',
      title: 'Clinical Pilates',
      institution: 'Clinical Pilates Institute'
    },
    {
      year: '2025',
      title: 'Φυσικοθεραπεία Πυελικού Εδάφους',
      institution: 'Πανεπιστήμιο Πατρών'
    },
    {
      year: '2017 - 2018 - 2025',
      title: 'Σεμινάρια Πρώτων Βοηθειών',
      institution: ''
    },
  ];
}