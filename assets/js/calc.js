function Calculator() {

    this.display = document.querySelector('.display');

    this.begin = () => {
        this.getClicks();
        this.enterKey();
    };

    this.enterKey = () => {
        this.display.addEventListener('keyup', e=> {
            if(e.keyCode !== 13) return;
            this.calculate();
        });
    };

    this.getClicks = () => {
        document.addEventListener('click', event => {
            
            const element = event.target;
            
            if(element.classList.contains('btn')) this.addNumDisplay(element);
            if(element.classList.contains('reset')) this.reset();
            if(element.classList.contains('del')) this.delete();
            if(element.classList.contains('equals')) this.calculate();
            
        });
    };

    this.addNumDisplay = element => this.display.value += element.innerText; // adiciona o valor no display

    this.reset = () => this.display.value = ''; // remove todos os valores

    this.delete = () => this.display.value = this.display.value.slice(0, -1); // deleta o último caractere

    this.calculate = () => {
        try {
            const calc = eval(this.display.value);

            if(!calc) {
                alert('Conta inválida!');
                return;
            }

            this.display.value = calc;
            
        } catch(e) {
            alert('Conta inválida!');
            return;
        }
        

    
    };
}

const calculator = new Calculator();
calculator.begin();
