import BasePage from './pages/basePage';

export class HomePage extends BasePage {
    constructor(page) {
        super(page);
        this.page = page;
        this.login_button_locator = "text=Login";
        this.contact_form_first_name_locator = page.getByRole('textbox', { name: 'First Name' });
        this.contact_form_last_name_locator = page.getByRole('textbox', { name: 'Last Name' });
        this.contact_form_email_locator = page.getByRole('textbox', { name: 'Email' });
        this.contact_form_phone_locator = page.getByRole('textbox', { name: 'Phone' });
        this.contact_form_message_locator = page.getByRole('textbox', { name: 'Message' });
        this.contact_form_submit_button_locator = page.getByRole('button', { name: 'Submit' });
    }

}
