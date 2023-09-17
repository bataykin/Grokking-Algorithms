// при условии, что мы имеем дело со смежным списком
// например, таким: adj = {A:[B,C,D], B:[E,F], ... }

// Breadth-First Search, BFS
export const wideSearch = (adjacencyList, startPoint, targetPoint) => {
    // adjacencyList - смежный список
    // startPoint - начальная вершина
    // targetPoint - пункт назначения

    // инициализируем очередь
    let queue = []
    // добавляем s в очередь
    queue.push(startPoint)
    // помечаем s как посещенную вершину во избежание повторного добавления в очередь
    startPoint.visited = true
    while (queue.length > 0) {
        // удаляем первый (верхний) элемент из очереди
        let v = queue.shift()
        // abj[v] - соседи v
        for (let neighbor of adjacencyList[v]) {
            // если сосед не посещался
            if (!neighbor.visited) {
                // добавляем его в очередь
                queue.push(neighbor)
                // помечаем вершину как посещенную
                neighbor.visited = true
                // если сосед является пунктом назначения, мы победили
                if (neighbor === targetPoint) return true
            }
        }
    }
    // если t не обнаружено, значит пункта назначения достичь невозможно
    return false
}