class Control {
  private state: any;
}

interface ISelectableControl extends Control {
  select(): void;
}

class Button extends Control implements ISelectableControl {
  select() { }
}
class TextBox extends Control {
  select() { }
}
class Image implements ISelectableControl {
  select() { }
}
