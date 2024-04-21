import { Component, Input } from '@angular/core';
import { KaInterface } from '../kenthapodi';
import { NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-kenthapodi-detail',
  standalone: true,
  imports: [FormsModule, NgIf, UpperCasePipe],
  templateUrl: './kenthapodi-detail.component.html',
  styleUrl: './kenthapodi-detail.component.scss',
})
export class KenthapodiDetailComponent {
  @Input() hero?: KaInterface;
}
