import { Request, Response, response } from "express";
import fs from 'fs';
import path from 'path';

interface FileProps {
  fileName: string;
}

class FileController {
  async store(request: Request, response: Response) {
    const SERVER = "http://localhost:3333/uploads/";

    const imageUploaded = request.file.filename;

    return response.json(SERVER + imageUploaded);
  }

  async remove(request: Request, response: Response) {
    const targetDirectory = path.resolve(__dirname, '..', '..', 'uploads');
    const {fileName} = request.body;
    const filePath = targetDirectory + '/' + fileName;
    try {
      fs.unlinkSync(filePath)
      //file removed
      return response.json({success: 'Arquivo removido'});
    } catch(err) {
      console.error(err)
    }  
  }
}

export default FileController;
