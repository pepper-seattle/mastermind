##Read in data
pm25_sum <- readRDS("summarySCC_PM25.rds")
pm25_srccls <- readRDS("Source_Classification_Code.rds")

##Baltimore subset
balt_sub <- subset(pm25_sum, fips == "24510" & type == "ON-ROAD")

##Aggregate emissions by mv for year
baltMV_emissions <- aggregate(Emissions ~ year, balt_sub, sum)

##plot Baltimore motor vehicle emission trends between 1999-2008
plot(baltMV_emissions$year, baltMV_emissions$Emissions, xlab = "year", ylab = "PM2.5 Emissions", main = "PM2.5 Motor Vehicle Emissions Between 1999-2008, Baltimore, MD", type = "l")