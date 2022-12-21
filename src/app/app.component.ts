import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

export interface Note {
  value: string;
  date: Date;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  protected displayedColumns: string[] = ['value', 'date', 'delete'];
  protected dataSource = new MatTableDataSource<Note>();
  protected newNote = new FormControl<string>('', { nonNullable: true });

  protected add(): void {
    this.dataSource.data.push({ value: this.newNote.value, date: new Date() });
    this.dataSource._updateChangeSubscription();
    this.newNote.reset();
  }

  protected delete(value: Note): void {
    this.dataSource.data = this.dataSource.data.filter(x => x != value);
    this.dataSource._updateChangeSubscription();
  }
}
