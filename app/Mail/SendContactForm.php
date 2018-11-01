<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class SendContactForm extends Mailable
{
    use Queueable, SerializesModels;


    public $name, $email, $phone, $inquiry;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($name, $email, $phone, $inquiry)
    {
        $this->name = $name;
        $this->email = $email;
        $this->phone = $phone;
        $this->inquiry = $inquiry;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
    return $this->from($this->email)
                ->to('carlos@triplecauto.ca')
                ->view('emails.contact-form');
    }
}
