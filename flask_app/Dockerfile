FROM python:3.7

WORKDIR /app

RUN pip install -U Flask

COPY . /app/

ENV FLASK_APP=app.py
ENV FLASK_DEBUG=1
ENV FLASK_ENV=development

EXPOSE 8888
CMD flask run --host=0.0.0.0 --port=8888