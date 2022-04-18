FROM scratch
COPY ./backend/main /
COPY ./backend/ca-certificates.crt /etc/ssl/certs/ca-certificates.crt
EXPOSE 8000
CMD ["/main"]
