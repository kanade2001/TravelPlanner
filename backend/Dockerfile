# Use the official Python base image
FROM python:3.9

# Set the working directory in the container
RUN mkdir /backend
WORKDIR /backend

# Copy the code to the container
ADD . /backend/
ADD requirements.txt /backend/

# Install requirements
RUN pip install -r requirements.txt
