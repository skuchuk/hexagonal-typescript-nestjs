import request from 'supertest';
import {Test, TestingModule} from '@nestjs/testing';
import {INestApplication} from '@nestjs/common';
import {AppModule} from '../src/app.module';
import MouseQueryDto from '../src/application/mice/mouse.query.dto';

const mice: MouseQueryDto[] = [
  {
    name: 'Jerry',
    gender: 'Male',
    age: 1,
  },
  {
    name: 'Mickey',
    gender: 'Male',
    age: 2,
  },
  {
    name: 'Speedy',
    gender: 'Male',
    age: 3,
  },
  {
    name: 'Ratatouille',
    gender: 'Male',
    age: 4,
  },
];

const gql = '/graphql';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('e2e', () => {
    describe('mice graphql', () => {
      it('should get the mouse array', () => {
        return request(app.getHttpServer())
          .post(gql)
          .send({query: '{getMice {name gender age}}'})
          .expect(200)
          .expect((res) => {
            expect(res.body.data.getMice).toEqual(mice);
          });
      });

      it('should get a single mouse', () => {
        return request(app.getHttpServer())
          .post(gql)
          .send({query: '{getMouse(name: "Ratatouille"){name gender age}}'})
          .expect(200)
          .expect((res) => {
            expect(res.body.data.getMouse).toEqual({
              name: 'Ratatouille',
              gender: 'Male',
              age: 4,
            });
          });
      });

      it('should get an error for bad mouse name', () => {
        return request(app.getHttpServer())
          .post(gql)
          .send({query: '{getMouse(name: "no-such-name"){name gender age}}'})
          .expect(200)
          .expect((res) => {
            expect(res.body.data).toBe(null);
            expect(res.body.errors[0].message).toBe('No mouse found with name no-such-name');
          });
      });
    });
  });
});
