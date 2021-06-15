import { Injectable } from '@nestjs/common';

import { Container, ContainerInspectInfo } from 'dockerode';
const Docker = require('dockerode');
const docker = new Docker({ socketPath: '/var/run/docker.sock' });
import { WritableStream } from 'memory-streams';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async runYasuri(uri: string, json: string): Promise<object> {

    const imageName = 'tac0x2a/yasuri';
    const outputStream = new WritableStream();
    const startTime = Date.now();

    const r: Promise<object> = docker
      .run(imageName, ['yasuri', 'scrape', uri, '--json', json], outputStream)
      .then((data) => {
        return {
          result: 'Success',
          status_code: data[0].StatusCode,
          start_time: startTime,
          process_time_ms: Date.now() - startTime,
          uri: uri,
          json: json,
          output: outputStream.toString(),
        };
      })
      .catch((error) => {
        console.log('Error:' + error.message);
        return {
          result: 'Failed',
          output: 'ERROR',
          message: error.message,
        };
      });

    return r;
  }
}
