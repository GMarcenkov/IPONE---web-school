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
                <address style={{"color":"black"}}>
                    <p>
                      Потърсете ни на имейл: <a style={{"color":"black","font-size":"20px","font-weight":"bolder" }} href="mailto:iponwebschool@gmail.com">iponwebschool@gmail.com</a>
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
