import React from "react";
import faker from 'faker';
import Client from '../Client';

class Clients extends React.Component {
    
    render() {
        const clientList = Array.from({ length: 100 }, () => ({
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                phoneNumber: faker.phone.phoneNumber(),
                avatar: faker.image.avatar(),
                jobTitle: faker.name.jobTitle()
            }));
        let clients = clientList.map((client) => (
            <Client firstName={client.firstName}
                    lastName={client.lastName}
                    phoneNumber={client.phoneNumber}
                    avatar={client.avatar}
                    jobTitle={client.jobTitle} />
        ));

        return <>{clients}</>;
    }
}

export default Clients;