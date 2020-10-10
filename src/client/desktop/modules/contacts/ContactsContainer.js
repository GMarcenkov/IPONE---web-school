import React from "react";

class ContactsContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };

    }

    render() {
        return (
            <div>
                <head>
                    <title>
                        Контакти
                    </title>
                </head>
                <h1>
                    Контакти
                </h1>
                <address>
                    <p>
                      Потърсете ни на имейл: <a href="mailto:georgi56126@gmail.com">georgi56126@gmail.com</a>
                    </p>
                </address>
                <p>
                    Всеки ден от <time>10:00</time> до <time>15:00</time>.
                </p>

            </div>
        );
    }
}

ContactsContainer.propTypes = {};

export default ContactsContainer;
