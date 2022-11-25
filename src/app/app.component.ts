import { Component } from '@angular/core';
// import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import * as ClassicEditor from '@ckeditor/ckeditor5-editor-inline';

import InlineEditor from '@ckeditor/ckeditor5-build-inline';
export class UploadAdapter {
  private loader;
  constructor( loader ) {
     this.loader = loader;
  }

  upload() {
     return this.loader.file
           .then( file => new Promise( ( resolve, reject ) => {
                 var myReader= new FileReader();
                 myReader.onloadend = (e) => {
                    resolve({ default: myReader.result });
                 }
                 myReader.readAsDataURL(file);
           } ) );
  };
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // public Editor:any = InlineEditor;
  // e!:any

  
//   public model:any = {
//     editorData: `test works! <figure class="table"><table><tbody><tr><td>hi</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>coders</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>material</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></tbody></table></figure><p>asdasd</p>`
// };

name = 'Angular';
editor = InlineEditor;
data: any = `<p>Hello, world!</p>`;


onReady(eventData) {
  eventData.plugins.get('FileRepository').createUploadAdapter = function (loader) {
    console.log('loader : ', loader)
    console.log(btoa(loader.file));
    return new UploadAdapter(loader);
  };
}


}
