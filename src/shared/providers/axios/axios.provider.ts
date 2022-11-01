import axios from 'axios';

export class AxiosProvider {
  async execute(options: object) {
    const { status, data } = await axios(options);

    return { status, data };
  }
}
