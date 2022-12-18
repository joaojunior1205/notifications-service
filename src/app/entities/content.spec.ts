import { Content } from "./content";

describe('Notification content', () => {
    it('should be able to create a notification content', () => {
        const content = new Content('Você recebeu uma nova solicitação de amizade');
    
        expect(content).toBeTruthy();
    }); // valida criação de notificaões
    
    it('should not be able to create notification content with less than 5 characters', () => {
        expect(() => new Content('aaa')).toThrow();
    }); // valida que vai retornar um erro ao criar uma notificação com menos de 5 char
    
    it('should not be able to create notification content with less than 5 characters', () => {
        expect(() => new Content('a'.repeat(241))).toThrow();
    }); // valida caso crie uma notificação com mais de 240 char.
});