#!/bin/bash

set -o errexit
set -o xtrace

main() {
  case $1 in
    setup-machine)
      setup_machine
      ;;

    install-packages)
      install_packages
      ;;

    deploy)
      deploy
      ;;

    *)
      echo "Unknown command '$1'"
      ;;

  esac
}

setup_machine() {
  echo "Installing WeDeploy Command-line"
  curl https://cdn.wedeploy.com/cli/latest/wedeploy.sh -sL | sudo bash
}

install_packages() {
  npm install -g npm@latest && npm install
}

deploy() {
  echo "Deploying to wedeploy"
}

main "$@"
