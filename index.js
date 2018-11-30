const http = require('http')
const express = require('express')

const app = express()


class ProblemSolver{
    super()
    solverOne(){
        return 1+1
    }
}


http.createServer(app).listen(5000,()=>console.log('server running on port 5000'))

