import { Controller , Post , Req , Res } from '@nestjs/common';
import { PictureService } from './picture.service';

@Controller('picture')
export class PictureController {
    constructor(private readonly pictureService: PictureService) {}

    @Post()
    async create(@Req() request , @Res() response) {
        try {
            await this.pictureService.fileupload(request, response);
          } catch (error) {
            console.log(error)
            return response
              .status(500)
              .json(`Failed to upload image file: ${error.message}`);
          }

    }

}
