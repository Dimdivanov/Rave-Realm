export const validateTicketCreateForm = (values) => {
    const { ticketName, ticketImgUrl, description, type, price } = values;

    // Check if ticket name is provided
    if (!ticketName.trim()) {
        return 'Ticket Name is required!';
    }

    // Check if a ticket image is selected
    if (!ticketImgUrl || ticketImgUrl === 'Select Ticket Image') {
        return 'Please select a Ticket Image!';
    }

    // Check if description is provided
    if (!description.trim()) {
        return 'Description is required!';
    }

    // Check if ticket type is provided
    if (!type.trim()) {
        return 'Ticket Type is required!';
    }

    // Check if price is a positive number
    if (!price || price <= 0) {
        return 'Ticket Price must be a positive number!';
    }

    return '';
};
