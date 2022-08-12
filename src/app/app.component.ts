import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pageination';
  currentPage: number= 0;
  isExist: boolean = false;

  images = [
    {
      title: "in the beach 1",
      imageUrl: 'https://imgs.search.brave.com/zwUFLhWpSN0iGXnY7Hg-OYfhif9c4RchTbSx3u0v2DU/rs:fit:1200:1200:1/g:ce/aHR0cDovL3d3dy5k/cm9kZC5jb20vaW1h/Z2VzMTAvYmVhY2gt/cGljdHVyZXMzLmpw/Zw'
    },
    {
      title: "in the beach 2",
      imageUrl: 'https://imgs.search.brave.com/SXzHQKCU-EyV3EwzEGL4W2Az59G8IWn_9Z7NF3XedeY/rs:fit:1200:1024:1/g:ce/aHR0cHM6Ly93d3cu/d2FsbHBhcGVyczEz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxNy8xMC9NYWxk/aXZlcy1TdW1tZXIt/UmVzb3J0LVNlYS1z/YW5keS1iZWFjaC1j/b2NvbnV0LXRyZWVz/LXdhdmVzLURlc2t0/b3AtV2FsbHBhcGVy/LUhELTE5MjB4MTA4/MC0xMjgweDEwMjQu/anBn'
    },
    {
      title: "in the beach 3",
      imageUrl: 'https://imgs.search.brave.com/orjUSA7hl7R2ICkz1VDE5bXw6JVRQUIXKWbrLBRFUkA/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/d2FsbHBhcGVyczEz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxNy8xMC9Qcml2/YXRlLWJlYWNoLW9u/LXRoZS1pc2xhbmQt/S29oLVRhby1UaGFp/bGFuZC1Bc2lhLTI1/NjB4MTYwMC0xNjAw/eDEyMDAuanBn'
    },
    {
      title: "in the beach 4",
      imageUrl: 'https://imgs.search.brave.com/v7Ku3KHdm8j9FPWur23Dt9NX-cdDGUY-nnzL1lpFmQs/rs:fit:1200:1080:1/g:ce/aHR0cHM6Ly93YWxs/dXAubmV0L3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE3LzAzLzE1/Lzg3NDEzLWJlYWNo/LXNhbmQuanBn'
    },
    {
      title: "in the beach 1",
      imageUrl: 'https://imgs.search.brave.com/zwUFLhWpSN0iGXnY7Hg-OYfhif9c4RchTbSx3u0v2DU/rs:fit:1200:1200:1/g:ce/aHR0cDovL3d3dy5k/cm9kZC5jb20vaW1h/Z2VzMTAvYmVhY2gt/cGljdHVyZXMzLmpw/Zw'
    },
    {
      title: "in the beach 2",
      imageUrl: 'https://imgs.search.brave.com/SXzHQKCU-EyV3EwzEGL4W2Az59G8IWn_9Z7NF3XedeY/rs:fit:1200:1024:1/g:ce/aHR0cHM6Ly93d3cu/d2FsbHBhcGVyczEz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxNy8xMC9NYWxk/aXZlcy1TdW1tZXIt/UmVzb3J0LVNlYS1z/YW5keS1iZWFjaC1j/b2NvbnV0LXRyZWVz/LXdhdmVzLURlc2t0/b3AtV2FsbHBhcGVy/LUhELTE5MjB4MTA4/MC0xMjgweDEwMjQu/anBn'
    },
    {
      title: "in the beach 3",
      imageUrl: 'https://imgs.search.brave.com/orjUSA7hl7R2ICkz1VDE5bXw6JVRQUIXKWbrLBRFUkA/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/d2FsbHBhcGVyczEz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxNy8xMC9Qcml2/YXRlLWJlYWNoLW9u/LXRoZS1pc2xhbmQt/S29oLVRhby1UaGFp/bGFuZC1Bc2lhLTI1/NjB4MTYwMC0xNjAw/eDEyMDAuanBn'
    },
    {
      title: "in the beach 4",
      imageUrl: 'https://imgs.search.brave.com/v7Ku3KHdm8j9FPWur23Dt9NX-cdDGUY-nnzL1lpFmQs/rs:fit:1200:1080:1/g:ce/aHR0cHM6Ly93YWxs/dXAubmV0L3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE3LzAzLzE1/Lzg3NDEzLWJlYWNo/LXNhbmQuanBn'
    },
    {
      title: "in the beach 1",
      imageUrl: 'https://imgs.search.brave.com/zwUFLhWpSN0iGXnY7Hg-OYfhif9c4RchTbSx3u0v2DU/rs:fit:1200:1200:1/g:ce/aHR0cDovL3d3dy5k/cm9kZC5jb20vaW1h/Z2VzMTAvYmVhY2gt/cGljdHVyZXMzLmpw/Zw'
    },
    {
      title: "in the beach 2",
      imageUrl: 'https://imgs.search.brave.com/SXzHQKCU-EyV3EwzEGL4W2Az59G8IWn_9Z7NF3XedeY/rs:fit:1200:1024:1/g:ce/aHR0cHM6Ly93d3cu/d2FsbHBhcGVyczEz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxNy8xMC9NYWxk/aXZlcy1TdW1tZXIt/UmVzb3J0LVNlYS1z/YW5keS1iZWFjaC1j/b2NvbnV0LXRyZWVz/LXdhdmVzLURlc2t0/b3AtV2FsbHBhcGVy/LUhELTE5MjB4MTA4/MC0xMjgweDEwMjQu/anBn'
    },
    {
      title: "in the beach 3",
      imageUrl: 'https://imgs.search.brave.com/orjUSA7hl7R2ICkz1VDE5bXw6JVRQUIXKWbrLBRFUkA/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/d2FsbHBhcGVyczEz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxNy8xMC9Qcml2/YXRlLWJlYWNoLW9u/LXRoZS1pc2xhbmQt/S29oLVRhby1UaGFp/bGFuZC1Bc2lhLTI1/NjB4MTYwMC0xNjAw/eDEyMDAuanBn'
    },
    {
      title: "in the beach 4",
      imageUrl: 'https://imgs.search.brave.com/v7Ku3KHdm8j9FPWur23Dt9NX-cdDGUY-nnzL1lpFmQs/rs:fit:1200:1080:1/g:ce/aHR0cHM6Ly93YWxs/dXAubmV0L3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE3LzAzLzE1/Lzg3NDEzLWJlYWNo/LXNhbmQuanBn'
    },
  ];

  setActiveClass(index : number) {
    return (index == this.currentPage) ? 'active' : '';
  }

  checkWindowsIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }
}
