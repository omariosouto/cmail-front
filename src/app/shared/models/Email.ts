export class Email {
    id: string
    assunto: string
    conteudo: string
    
    get introducao() {
        return this.conteudo.substr(0,140) + '...'
    }
}