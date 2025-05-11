import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatIconModule, CommonModule, MatChipsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  specialties = [
    { icon: 'local_hospital', text: 'Πρώτες Βοήθειες' },
    { icon: 'fitness_center', text: 'Άσκηση στην Ορθοπαιδική Αποκατάσταση' },
    { icon: 'healing', text: 'Αντιμετώπιση Οιδημάτων & Λεμφική Παροχέτευση' },
    { icon: 'favorite', text: 'Καρδιοαναπνευστικές Φυσικοθεραπευτικές Προσεγγίσεις' },
    { icon: 'accessibility', text: 'Αντιμετώπιση Πόνου στον Ώμο' },
    { icon: 'self_improvement', text: 'Θεραπευτικό Pilates' },
    { icon: 'health_and_safety', text: 'Φυσικοθεραπεία Πυελικού Εδάφους' }
  ];
}
