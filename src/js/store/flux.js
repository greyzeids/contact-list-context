const getState = ({ getActions, setStore }) => {
    const API_URL =
        "https://playground.4geeks.com/contact/agendas/agenda_miquel/";

    return {
        store: {
            contacts: [],
        },
        actions: {
            getContacts: async () => {
                try {
                    const response = await fetch(API_URL);
                    if (response.status === 404) {
                        await getActions().createAgenda();
                    }
                    if (!response.ok) {
                        throw new Error(`API Error: ${response.statusText}`);
                    }
                    const data = await response.json();
                    setStore({ contacts: data.contacts });
                } catch (error) {
                    console.error("Error fetching contacts:", error);
                }
            },

            createAgenda: async () => {
                try {
                    await fetch(API_URL, {
                        method: "POST",
                    });
                } catch (error) {
                    console.error("Error creating agenda:", error);
                }
            },

            addContact: async (contact) => {
                try {
                    const response = await fetch(`${API_URL}contacts/`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(contact),
                    });
                    if (!response.ok) {
                        throw new Error(`API Error: ${response.statusText}`);
                    }
                    getActions().getContacts();
                } catch (error) {
                    console.error("Error adding contact:", error);
                }
            },

            updateContact: async (id, updatedContact) => {
                try {
                    const response = await fetch(`${API_URL}contacts/${id}`, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(updatedContact),
                    });
                    if (!response.ok) {
                        throw new Error(`API Error: ${response.statusText}`);
                    }
                    getActions().getContacts();
                } catch (error) {
                    console.error("Error updating contact:", error);
                }
            },

            deleteContact: async (id) => {
                try {
                    const response = await fetch(`${API_URL}contacts/${id}`, {
                        method: "DELETE",
                    });
                    if (!response.ok) {
                        throw new Error(`API Error: ${response.statusText}`);
                    }
                    getActions().getContacts();
                } catch (error) {
                    console.error("Error deleting contact:", error);
                }
            },
        },
    };
};

export default getState;
