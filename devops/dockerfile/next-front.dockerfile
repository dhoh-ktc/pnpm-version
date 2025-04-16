FROM ubuntu:20.04

RUN apt-get update -y
RUN apt-get install curl -y
RUN curl -sL https://deb.nodesource.com/setup_20.x | bash -
RUN apt-get install nodejs -y

RUN apt-get update -y
RUN apt-get install sshpass netcat -y


WORKDIR /root/home

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start:development"]