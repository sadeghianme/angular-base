import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {
  CdkDrag,
  CdkDragStart,
  CdkDropList, CdkDropListContainer, CdkDropListGroup,
  moveItemInArray
} from "@angular/cdk/drag-drop";
@Component({
  selector: 'app-drag',
  templateUrl: './drag.component.html',
  styleUrls: ['./drag.component.scss']
})
export class DragComponent implements AfterViewInit {
  @ViewChild(CdkDropListGroup) listGroup: CdkDropListGroup<CdkDropList>;
  @ViewChild(CdkDropList) placeholder: CdkDropList;

  public items: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  public target: CdkDropList;
  public targetIndex: number;
  public source: CdkDropListContainer;
  public sourceIndex: number;

  constructor() {
    this.target = null;
    this.source = null;
  }

  ngAfterViewInit() {
    let phElement = this.placeholder.element.nativeElement;

    phElement.style.display = 'none';
    phElement.parentNode.removeChild(phElement);
  }

  add() {
    this.items.push(this.items.length + 1);
  }

  shuffle() {
    this.items.sort(function() {
      return .5 - Math.random();
    });
  }

  drop() {
    if (!this.target) {
      return;
    }

    const phElement = this.placeholder.element.nativeElement;
    const parent = phElement.parentNode;
    console.log(phElement, 'parent--', parent)
    phElement.style.display = 'none';

    parent.removeChild(phElement);
    parent.appendChild(phElement);
    parent.insertBefore(this.source.element.nativeElement, parent.children[this.sourceIndex]);

    this.target = null;
    this.source = null;

    if (this.sourceIndex !== this.targetIndex) {
      moveItemInArray(this.items, this.sourceIndex, this.targetIndex);
    }
  }

  enter = (drag: CdkDrag, drop: CdkDropList) => {
    if (drop === this.placeholder) {
      return true;
    }

    console.log('aaaa', this.placeholder);
    const phElement = this.placeholder.element.nativeElement;
    const dropElement = drop.element.nativeElement;

    const dragIndex = __indexOf(dropElement.parentNode.children, drag.dropContainer.element.nativeElement);
    const dropIndex = __indexOf(dropElement.parentNode.children, dropElement);

    if (!this.source) {
      this.sourceIndex = dragIndex;
      this.source = drag.dropContainer;

      const sourceElement = this.source.element.nativeElement;
      phElement.style.width = sourceElement.clientWidth + 'px';
      phElement.style.height = sourceElement.clientHeight + 'px';

      sourceElement.parentNode.removeChild(sourceElement);
    }

    this.targetIndex = dropIndex;
    this.target = drop;

    phElement.style.display = '';
    dropElement.parentNode.insertBefore(phElement, (dragIndex < dropIndex)
      ? dropElement.nextSibling : dropElement);

    this.source.start();
    this.placeholder.enter(drag, drag.element.nativeElement.offsetLeft, drag.element.nativeElement.offsetTop);

    return false;
  }
}

function __indexOf(collection, node) {
  return Array.prototype.indexOf.call(collection, node);
}
