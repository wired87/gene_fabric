export interface CheckBoxObj {
  title: string;
  selected: boolean;
}

export interface MailT {
  name: string,
  email: string,
  subject: string,
  phone: string, // Optional
  message: string,
  preferredServices: string[], // Array for multiple checkboxes
  time: number, // Slider value
}
