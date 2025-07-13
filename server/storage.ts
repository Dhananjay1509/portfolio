import type { Contact } from "@shared/schema";

interface ContactWithId extends Contact {
  id: string;
  createdAt: Date;
}

class MemoryStorage {
  private contacts: ContactWithId[] = [];

  async createContact(data: Contact): Promise<ContactWithId> {
    const contact: ContactWithId = {
      id: Date.now().toString(),
      ...data,
      createdAt: new Date()
    };
    this.contacts.push(contact);
    return contact;
  }

  async getContacts(): Promise<ContactWithId[]> {
    return this.contacts;
  }
}

export const storage = new MemoryStorage();
