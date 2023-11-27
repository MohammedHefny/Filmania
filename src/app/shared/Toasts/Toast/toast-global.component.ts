import {
  Component,
  inject,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  TemplateRef,
} from '@angular/core';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

import { ToastService } from './toast.service';
import { ToastsContainer } from './toasts-container.component';

@Component({
  selector: 'app-toast-global',
  standalone: true,
  imports: [NgbTooltipModule, ToastsContainer],
  templateUrl: './toast-global.component.html',
})
export class ToastComponent implements OnDestroy, OnChanges {
  defaultTpl: any;
  successTpl: any;
  constructor(private toastService: ToastService) {}
  showStandard(template: TemplateRef<any>) {
    this.toastService.show({ template });
  }

  showSuccess(template: TemplateRef<any>) {
    this.toastService.show({
      template,
      classname: 'bg-success text-light',
      delay: 5000,
    });
  }

  showDanger(template: TemplateRef<any>) {
    this.toastService.show({
      template,
      classname: 'bg-danger text-light',
      delay: 15000,
    });
  }

  ngOnDestroy(): void {
    this.toastService.clear();
  }
  @Input() msg!: string;
  displayedMessage: any;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.msg) {
      const previousMsg = changes.msg.previousValue;
      const currentMsg = changes.msg.currentValue;

      if (currentMsg === 'Added' && previousMsg !== 'Added') {
        // Change the displayed message
        this.displayedMessage = this.successTpl;
        // Optionally, you can also reset the msg input to a default value
        // this.msg = 'Default message';
      } else {
        // If the condition is not met, display the default message
        this.displayedMessage = this.defaultTpl;
      }
    }
  }
}
