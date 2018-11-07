run:
	./bin/viatrix

build:
	go build -x -o ./bin/viatrix ./src
	sudo setcap CAP_NET_BIND_SERVICE=+eip ./bin/viatrix

