class Toast {
  constructor(position = "top right", timeout = 5000) {
    this.position = position.split(" ");
    this.timeout = timeout;
    this.container = document.createElement("div");
    this.container.classList.add("toast-container");
    this.container.classList.add(this.position[0]);
    this.container.classList.add(this.position[1]);
    document.body.appendChild(this.container);
  }
  success(msg) {
    const toast = document.createElement("div");
    toast.classList.add("toast");
    toast.classList.add("success");
    toast.innerHTML = `&#10003&nbsp;${msg}`;
    this.container.appendChild(toast);

    setTimeout(() => {
      this.container.removeChild(toast);
    }, this.timeout);
  }

  error(msg) {
    const toast = document.createElement("div");
    toast.classList.add("toast");
    toast.classList.add("error");
    toast.innerHTML =`&#x1F5D9;&nbsp;${msg}`;
    this.container.appendChild(toast);

    setTimeout(() => {
      this.container.removeChild(toast);
    }, this.timeout);
  }

  warning(msg) {
    const toast = document.createElement("div");
    toast.classList.add("toast");
    toast.classList.add("warning");
    toast.innerHTML =`&#9888;&nbsp;${msg}`;
    this.container.appendChild(toast);

    setTimeout(() => {
      this.container.removeChild(toast);
    }, this.timeout);
  }

  info(msg) {
    const toast = document.createElement("div");
    toast.classList.add("toast");
    toast.classList.add("info");
    toast.innerHTML =`&#8505;&nbsp;${msg}`;
    this.container.appendChild(toast);

    setTimeout(() => {
      this.container.removeChild(toast);
    }, this.timeout);
  }
 
  confirm(message, options = false) {
    const confirm = document.createElement("div");
    confirm.classList.add("toastr-confirm");
    confirm.innerHTML = `<div class='toastr-confirm-body'>
    <h3 class='toastr-title text-red t-2'>&#9888;</h3>
    <div class='toastr-title'>${message}</div>
    <div class='toastr-actions'>
      <button id='toastr-btn-no' class='btn btn-error'>&#x1F5D9;&nbsp;Cancel</button>
      <button id='toastr-btn-yes' class='btn btn-primary'>Confirm&nbsp;&#10003</button>
    </div></div>`;

    const check = this.container.childNodes.forEach(node => node.isEqualNode(confirm));
    if (!check) {
      this.container.appendChild(confirm);
      document.querySelector("#toastr-btn-no").addEventListener("click", () => {
        if(options !== false) options.no();
        this.container.removeChild(confirm);
      }, true);
      document.querySelector("#toastr-btn-yes").addEventListener("click", () => {
        this.container.removeChild(confirm);
        if(options !== false) options.yes();
      }, true);
    }
  }

  errorhandler(error) {
    const errorcontainer = document.createElement("div");
    errorcontainer.classList.add("toastr-confirm");

    errorcontainer.innerHTML = `<div class='text-red'>${error}</div>`;

    this.container.appendChild(errorcontainer);
  }

  
}

const toastr = new Toast();

class Effects {
  constructor(){}

  zoom(container, target) {
    document.querySelector(container).addEventListener("mousemove", (e) => {
      const x = e.clientX - e.target.offsetLeft;
      const y = e.clientY - e.target.offsetTop;
    
      document.querySelector(target).style.transformOrigin = `${x}px ${y}px`;
      document.querySelector(target).style.transform = "scale(2)";
    });
    
    document.querySelector(container).addEventListener("mouseleave", (e) => {
      document.querySelector(target).style.transformOrigin = `center center`;
      document.querySelector(target).style.transform = "scale(1)";
    });
  }

  bounce(){}

  rotate(){}

  spin(){}

  jump(){}
}

const effects = new Effects();

