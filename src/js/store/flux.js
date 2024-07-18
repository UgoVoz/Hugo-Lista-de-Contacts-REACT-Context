const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			loadContacts: async () => {
				try {
					let response = await fetch(
						"https://playground.4geeks.com/contact/agendas/hugo_agenda"
					);
					let data = await response.json();
					setStore({
						contacts: data
					});
				} catch (error) {
					console.log(error);
				}
			},
			addContact: async currentContact => {
				try {
					let response = await fetch(
						"https://playground.4geeks.com/apis/fake/contact/",
						{
							method: "POST",
							headers: { "Content-Type": "application/json" },
							body: JSON.stringify({
								full_name: currentContact.full_name,
								email: currentContact.email,
								agenda_slug: "rvargas",
								address: currentContact.address,
								phone: currentContact.phone
							})
						}
					);
					if (response.ok) {
						let data = await response.json();
						console.log(data);
						getActions().loadContacts();
					}
				} catch (error) {
					console.log(error);
				}
			},
			editContact: async currentContact => {
				try {
					let response = await fetch(
						`https://playground.4geeks.com/apis/fake/contact/${currentContact.id}`,
						{
							method: "PUT",
							headers: { "Content-Type": "application/json" },
							body: JSON.stringify({
								full_name: currentContact.full_name,
								email: currentContact.email,
								agenda_slug: "rolando",
								address: currentContact.address,
								phone: currentContact.phone
							})
						}
					);
					if (response.ok) {
						let data = await response.json();
						console.log(data);
						getActions().loadContacts();
					}
				} catch (error) {
					console.log(error);
				}
			},
			deleteContact: async currentContactId => {
				try {
					let response = await fetch(
						`https://playground.4geeks.com/apis/fake/contact/${currentContactId}`,
						{
							method: "DELETE"
						}
					);
					if (response.ok) {
						let data = await response.json();
						console.log(data);
						getActions().loadContacts();
					}
				} catch (error) {
					console.log(error);
				}
			},
			formatData: contactos => {
				contactos.sort((a, b) => {
					if (a.name.toLowerCase() < b.name.toLowerCase()) {
						return -1;

					} if (a.name.toLowerCase() > b.name.toLowerCase()) {
						return 1;

					} return 0;
				});
			},
			createAgenda: () => {
				fetch("https://playground.4geeks.com/contact/agendas/Hugo_Agenda", {
					method: "POST",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify()

				})
					.then(resp => resp.json())
					.then(data => data)
					.catch(error => console.log(error))
			}
		}
	};
};

export default getState;